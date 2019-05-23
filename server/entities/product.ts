import { Entity, Index, Column, OneToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Domain, DomainBaseEntity } from '@things-factory/shell'
import { Company } from '@things-factory/biz-base'

@Entity('products')
@Index('ix_product_0', (product: Product) => [product.domain, product.company, product.name], { unique: true })
@Index('ix_product_1', (product: Product) => [product.domain, product.company, product.refTo])
export class Product extends DomainBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @Column('text')
  company: Company

  @Column('text')
  name: string

  @ManyToOne(type => Product, product => product.aliases)
  refTo: Product

  @OneToMany(type => Product, product => product.refTo)
  aliases: Product[]

  @Column('text')
  type: string

  @Column('text')
  unit: string

  @Column('text', {
    nullable: true
  })
  description: string
}

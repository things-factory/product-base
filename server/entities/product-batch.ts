import { Entity, Index, Column, OneToMany, ManyToOne, PrimaryGeneratedColumn, OneToOne } from 'typeorm'
import { Domain, DomainBaseEntity } from '@things-factory/shell'
import { Lot } from './lot'

@Entity('product-batches')
@Index('ix_product-batch_0', (productBatch: ProductBatch) => [productBatch.domain, productBatch.name], { unique: true })
export class ProductBatch extends DomainBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @Column('text')
  name: string

  @Column('text')
  yourName: string

  @OneToMany(type => Lot, lot => lot.productBatch)
  lots: Lot[]

  @Column('float')
  qty: number

  @Column('text')
  state: string

  @Column('text', {
    nullable: true
  })
  description: string
}

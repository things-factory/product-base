import { Entity, Index, Column, OneToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Domain, DomainBaseEntity } from '@things-factory/shell'
import { Bizplace } from '@things-factory/biz-base'

@Entity('bizplace-products')
@Index('ix_bizplace-product_0', (bizplaceProduct: BizplaceProduct) => [bizplaceProduct.domain, bizplaceProduct.name], {
  unique: true
})
export class BizplaceProduct extends DomainBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @ManyToOne(type => Bizplace)
  bizplace: Bizplace

  @Column('text')
  name: string

  @Column('text')
  location: string

  @Column('text', {
    nullable: true
  })
  description: string
}

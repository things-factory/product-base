import { Entity, Index, Column, OneToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Domain, DomainBaseEntity } from '@things-factory/shell'
import { ProductBatch } from './product-batch'

@Entity('lots')
@Index('ix_lot_0', (lot: Lot) => [lot.domain, lot.name], { unique: true })
export class Lot extends DomainBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @Column('text')
  name: string

  @ManyToOne(type => ProductBatch, productBatch => productBatch.lots)
  productBatch: ProductBatch

  @Column('float')
  qty: number

  @Column('text')
  state: string

  @Column('text', {
    nullable: true
  })
  description: string
}

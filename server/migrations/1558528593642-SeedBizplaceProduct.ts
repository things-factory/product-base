import { MigrationInterface, QueryRunner, getRepository } from 'typeorm'
import { Domain } from '@things-factory/shell'
import { BizplaceProduct } from '../entities'

const SEED = [
  {
    name: 'Seed',
    description: 'Description for Seed'
  }
]

export class SeedBizplaceProduct1558528593642 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(BizplaceProduct)
    const domainRepository = getRepository(Domain)
    const domain = await domainRepository.findOne({
      name: 'SYSTEM'
    })

    try {
      SEED.forEach(async bizplaceProduct => {
        await repository.save({
          ...bizplaceProduct,
          domain
        })
      })
    } catch (e) {
      console.error(e)
    }
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(BizplaceProduct)
    SEED.reverse().forEach(async bizplaceProduct => {
      let record = await repository.findOne({ name: bizplaceProduct.name })
      await repository.remove(record)
    })
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCompanyDTO } from './dto/create-company.dto';
import { UpdateCompanyDTO } from './dto/update-company.dto';
import { CompanyEntity } from './company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(CompanyEntity)
    private readonly companyRepository: Repository<CompanyEntity>,
  ) {}

  async store(data: CreateCompanyDTO) {
    const company = await this.companyRepository.create(data);
    return await this.companyRepository.save(company);
  }

  async findAll() {
    return await this.companyRepository.find({
      select: ['id', 'userId', 'name', 'website', 'cnpj'],
    });
  }

  async findOne(id: string) {
    try {
      return await this.companyRepository.findOneOrFail({ where: { id: id } });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findByUserId(userId: string) {
    try {
      return await this.companyRepository.find({
        where: { userId },
      });
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async update(id: string, data: UpdateCompanyDTO) {
    const user = await this.companyRepository.findOne({ where: { id } });
    this.companyRepository.merge(user, data);
    return await this.companyRepository.save(user);
  }

  async destroy(id: string) {
    await this.companyRepository.findOne({ where: { id: id } });
    this.companyRepository.softDelete(id);
  }
}

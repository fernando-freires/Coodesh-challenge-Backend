import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLocationDTO } from './dto/create-location.dto';
import { UpdateLocationDTO } from './dto/update-location.dto';
import { LocationEntity } from './location.entity';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(LocationEntity)
    private readonly companyRepository: Repository<LocationEntity>,
  ) {}

  async store(data: CreateLocationDTO) {
    const company = await this.companyRepository.create(data);
    return await this.companyRepository.save(company);
  }

  async findAll() {
    return await this.companyRepository.find({
      select: [
        'id',
        'companyId',
        'name',
        'cep',
        'street',
        'number',
        'neighborhood',
        'city',
        'UF',
      ],
    });
  }

  async findOne(id: string) {
    try {
      return await this.companyRepository.findOneOrFail({ where: { id: id } });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findByCompanyId(companyId: string) {
    try {
      return await this.companyRepository.find({
        where: { companyId },
      });
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async findQtdByCompanyId(companyId: string) {
    try {
      const locals = await this.companyRepository.find({
        where: { companyId },
        select: ['companyId', 'name'],
      });

      return { qtd: locals.length, companyId };
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async update(id: string, data: UpdateLocationDTO) {
    const user = await this.companyRepository.findOne({ where: { id } });
    this.companyRepository.merge(user, data);
    return await this.companyRepository.save(user);
  }

  async destroy(id: string) {
    await this.companyRepository.findOne({ where: { id: id } });
    this.companyRepository.softDelete(id);
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CompanyService } from './company.service';
import { CreateCompanyDTO } from './dto/create-company.dto';
import { UpdateCompanyDTO } from './dto/update-company.dto';
@Controller('api/v1/companies')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}
  @UseGuards(AuthGuard('jwt'))
  @Post()
  async createNewCompany(@Body() body: CreateCompanyDTO) {
    return await this.companyService.store(body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async listAllCompanies() {
    return await this.companyService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async showCompanyById(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.companyService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/company/:userId')
  async showCompaniesByUserId(
    @Param('userId', new ParseUUIDPipe()) userId: string,
  ) {
    console.log(userId);
    return await this.companyService.findByUserId(userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateCompanyDTO,
  ) {
    return await this.companyService.update(id, body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.companyService.destroy(id);
  }
}

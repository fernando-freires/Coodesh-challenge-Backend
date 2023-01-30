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
import { LocationService } from './location.service';
import { CreateLocationDTO } from './dto/create-location.dto';
import { UpdateLocationDTO } from './dto/update-location.dto';

@Controller('api/v1/locations')
@UseGuards(AuthGuard('jwt'))
export class LocationController {
  constructor(private readonly locationService: LocationService) {}
  @Get()
  async listAllLocations() {
    return await this.locationService.findAll();
  }

  @Post()
  async createNewLocation(@Body() body: CreateLocationDTO) {
    return await this.locationService.store(body);
  }

  @Get(':id')
  async showLocationById(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.locationService.findOne(id);
  }

  @Get('/local/:companyId')
  async showLocationsByCompany(@Param('companyId') companyId: string) {
    return await this.locationService.findByCompanyId(companyId);
  }

  @Get('/qtd/local/:companyId')
  async showQtdLocationsByCompanyId(@Param('companyId') companyId: string) {
    return await this.locationService.findQtdByCompanyId(companyId);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateLocationDTO,
  ) {
    return await this.locationService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.locationService.destroy(id);
  }
}

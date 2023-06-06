import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ArtistsService } from "./artists.service";
import { ApiTags } from "@nestjs/swagger";
import { Artist } from "./artists.entity";

@ApiTags("artists")
@Controller("artists")
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Get()
  getArtists() {
    return this.artistsService.getArtists();
  }
  @Get(":id")
  getArtist(@Param("id", ParseIntPipe) id: number) {
    return this.artistsService.getArtist(id);
  }

  @Post()
  createArtist(@Body() body: Artist) {
    return this.artistsService.createArtist(body);
  }

  @Put(":id")
  updateArtist(@Param("id", ParseIntPipe) id: number, @Body() body: Artist) {
    return this.artistsService.updateArtist(id, body);
  }

  @Delete(":id")
  deleteArtist(@Param("id", ParseIntPipe) id: number) {
    return this.artistsService.deleteArtist(id);
  }
}

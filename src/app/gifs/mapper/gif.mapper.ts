import { Gif } from '../interface/gif.interface';
import { GifData} from '../interface/gifsApp.interfeces';
export class GifMapper {
  static mapGifsphytemTegif(gifData:GifData ): Gif{
    return {
      id: gifData.id,
      titulo: gifData.title,
      url: gifData.images.original.url

    }
  }

  static mapGifItemsToGifArray(gifDatas: GifData[]): Gif[] {
      return gifDatas.map(this.mapGifsphytemTegif)
  }
}

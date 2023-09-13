/* eslint-disable indent */
const convertRatingToClient = (rating) => rating * 20;

const convertFeatures = (data) => {
  return [
    {
      id: 0,
      featureName: data.type,
      className: 'property__feature--entire',
    },
    {
      id: 1,
      featureName: `${data.bedrooms} Bedrooms`,
      className: 'property__feature--bedrooms',
    },
    {
      id: 2,
      featureName: `Max ${data.max_adults} adults`,
      className: 'property__feature--adults',
    },
  ];
};

class Room {
  static convertDataHotel(data) {
    const adaptedHotel = Object.assign(
      {},
      data,
      {
        level: data.is_premium ? 'Premium' : '',
        img: data.preview_image,
        priceValue: data.price.toString(),
        priceText: 'night',
        bookmark: data.is_favorite ? 'In bookmarks' : 'To bookmarks',
        rating: convertRatingToClient(data.rating),
        card: data.description,
        cityName: data.city.name,
        coordinates: {
          lat: data.location.latitude,
          lng: data.location.longitude,
          zoom: data.location.zoom
        },
        host: {
          title: 'Meet the host',
          user: {
            id: data.host.id,
            name: data.host.name,
            img: data.host.avatar_url,
            status: data.host.is_pro ? 'Pro' : '',
          }
        },
        images: data.images.map((el, index) => {
          return {
            id: index,
            src: el,
            alt: 'Photo room'
          };
        }),
        features: convertFeatures(data),
      });

    delete adaptedHotel.is_premium;
    delete adaptedHotel.preview_image;
    delete adaptedHotel.is_favorite;
    delete adaptedHotel.price;
    delete adaptedHotel.bedrooms;
    delete adaptedHotel.max_adults;
    delete adaptedHotel.location;

    return adaptedHotel;
  }
}

class City {
  static convertDataToCity(data) {
    const adaptedCity = Object.assign(
      {},
      data,
      {
        [data.name]: {
          lat: data.location.latitude,
          lng: data.location.longitude,
          zoom: data.location.zoom,
        }
      }
    );
    delete adaptedCity.name;
    delete adaptedCity.location;
    return adaptedCity;
  }
}

export { Room, City };


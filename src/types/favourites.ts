type Favourite = {
  id: number;
  user_id: string;
  image_id: string;
  sub_id: string;
  created_at: string;
  image: {
    id: string;
    url: string;
  };
};

type Favourites = Favourite[];

export type { Favourite, Favourites };

type StopoverTourOperator = {
  higligth: boolean | null;
  priority: number | null;
  parent_page: unknown | null; // pending page schema
  parent_content: StopoverTourOperator | null;
  children: StopoverTourOperator[] | null;
  id: number;
  user_created: string | number;
  date_created: string;
  user_modified: string | number;
  date_modified: string;
  name: string;
  status:
    | 'archived'
    | 'error'
    | 'draft'
    | 'review'
    | 'publishing'
    | 'published';
  main_image: string | null;
  contact: null | {
    form: 'e-mail' | 'phone' | 'whastapp';
    contact: 'string';
  };
  network: null | {
    type: 'facebook' | 'instagram' | 'tiktok' | 'youtube' | 'website';
    link: string;
  };
  stopover_tours: unknown[] | null; // pending M2M
  duplicate: boolean;
};

// interfaces/index.ts

// Existing interfaces...
export interface CardProps {
  /** The title to display in the card header. */
  title: string;
  /** The main content or body text of the card. */
  content: string;
}

export interface PostData {
  title: string;
  content: string;
}

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonShape = 'rounded-sm' | 'rounded-md' | 'rounded-full';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: ButtonSize;
  shape?: ButtonShape;
  onClick?: () => void;
}

export interface PostCardProps {
  /** The title of the post. */
  title: string;
  /** The body content of the post. (Maps to JSONPlaceholder's 'body') */
  content: string;
  /** The ID of the user who authored the post. */
  userId: number;
}

export interface PostsPageProps {
  posts: PostCardProps[];
}

// NEW: Interface for the UserCard component
export interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
  };
}

// NEW: Interface for the Users page props
export interface UsersPageProps {
  users: UserProps[];
}
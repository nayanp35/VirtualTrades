export interface NewsCardProps {
  imgLink: string;
  headline: string;
  summary: string;
  newsLink: string;
}

export interface NewsData {
  id: number;
  headline: string;
  summary: string;
  url: string;
  image: string;
}

export type materialColors =
  | "white"
  | "blue-gray"
  | "gray"
  | "brown"
  | "deep-orange"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "light-green"
  | "green"
  | "teal"
  | "cyan"
  | "light-blue"
  | "blue"
  | "indigo"
  | "deep-purple"
  | "purple"
  | "pink"
  | "red";

  export export interface NewsCardProps {
    imgLink: string;
    headline: string;
    summary: string;
    newsLink: string;
  }
  
  export interface NewsData {
    id: number;
    headline: string;
    summary: string;
    url: string;
    image: string;
  }
  
  export type materialColors =
    | "white"
    | "blue-gray"
    | "gray"
    | "brown"
    | "deep-orange"
    | "orange"
    | "amber"
    | "yellow"
    | "lime"
    | "light-green"
    | "green"
    | "teal"
    | "cyan"
    | "light-blue"
    | "blue"
    | "indigo"
    | "deep-purple"
    | "purple"
    | "pink"
    | "red";
    export interface User {
      id: string;
      initial_amount: number;
      cash: number;
      current_portfolio_value: number;
    }
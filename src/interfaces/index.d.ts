export interface RouterProps {
  [key: string]: any;
  matches: {
    [key: string]: string;
  };
  path: string;
  url: string;
}

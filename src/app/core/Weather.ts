import { IconDefinition } from "@fortawesome/free-regular-svg-icons"

export interface Weather {
  icon: string,
  temp: number,
  description: string,
  location: string,
  humidity: Parameter
}

export interface Parameter {
  value: number,
  unit: string,
  title: string,
  icon: any
}

export enum Brand {
  SAMSUNG = 'SAMSUNG',
  MOTOROLA = 'MOTOROLA',
  REALME = 'REALME',
  DECIDING = 'DECIDING'
}

export enum EntryVal {
  RANGE_150_300 = 'RANGE_150_300',
  RANGE_300_600 = 'RANGE_300_600',
  ABOVE_600 = 'ABOVE_600',
  INSTALLMENTS = 'INSTALLMENTS'
}

export enum Usage {
  WORK = 'WORK',
  SOCIAL = 'SOCIAL',
  GAMES = 'GAMES',
  BASIC = 'BASIC'
}

export enum Timeframe {
  TODAY = 'TODAY',
  TOMORROW = 'TOMORROW',
  THIS_WEEK = 'THIS_WEEK',
  RESEARCHING = 'RESEARCHING'
}

export enum DocStatus {
  ORIGINAL = 'ORIGINAL',
  DIGITAL = 'DIGITAL',
  PHOTO_COPY = 'PHOTO_COPY',
  NONE = 'NONE'
}

export enum ResultType {
  ELIGIBLE = 'ELIGIBLE', // Scenario A
  BLOCKED = 'BLOCKED',   // Scenario B
  WARNING = 'WARNING'    // Scenario C
}

export interface Answers {
  brand: Brand | null;
  entryVal: EntryVal | null;
  usage: Usage | null;
  timeframe: Timeframe | null;
  docStatus: DocStatus | null;
  whatsapp: string;
  name?: string;
}

export interface StepProps {
  onNext: (data: Partial<Answers>) => void;
  isTransitioning?: boolean;
  answers?: Answers;
}
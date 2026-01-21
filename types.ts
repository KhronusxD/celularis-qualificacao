export enum AgeGroup {
  UNDER_18 = 'UNDER_18',
  ADULT = 'ADULT', // 18-65
  SENIOR = 'SENIOR' // > 65
}

export enum DocStatus {
  ORIGINAL = 'ORIGINAL',
  COPY_EXPIRED = 'COPY_EXPIRED',
  NONE = 'NONE'
}

export enum TradeInStatus {
  HAS_DEVICE = 'HAS_DEVICE',
  CASH = 'CASH'
}

export enum ResultType {
  ELIGIBLE = 'ELIGIBLE', // Scenario A
  BLOCKED = 'BLOCKED',   // Scenario B
  WARNING = 'WARNING'    // Scenario C
}

export interface Answers {
  ageGroup: AgeGroup | null;
  docStatus: DocStatus | null;
  tradeIn: TradeInStatus | null;
  whatsapp: string;
  name?: string;
}

export interface StepProps {
  onNext: (data: Partial<Answers>) => void;
  isTransitioning?: boolean;
}
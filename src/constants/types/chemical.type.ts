import {HealthType} from "./health.type";

export type Chemical = {
    cas: string,
    koName: string,
    enName: string,
    molecularFormula: string,
    description: string,
    chemicalLaw: [],
    riskCoefficient: number,
    specifiedQuantity: number,
    healthType: HealthType,
    density: number,
    unit: 'kg'|'L'
}

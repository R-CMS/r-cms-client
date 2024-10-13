import explosive from "../../assets/GHSSign/explosive.png"
import flammable from "../../assets/GHSSign/flammable.png"
import oxidizing from "../../assets/GHSSign/oxidizing.png"
import gasUnderPressure from "../../assets/GHSSign/gasUnderPressure.png"
import corrosive from "../../assets/GHSSign/corrosive.png"
import toxic from "../../assets/GHSSign/toxic.png"
import harmfulOrIrritant from "../../assets/GHSSign/harmfulOrIrritant.png"
import healthHazard from "../../assets/GHSSign/healthHazard.png"
import environmentalHazard from "../../assets/GHSSign/environmentalHazard.png"

export enum GHSSign {
    Explosive = 'Explosive',  // GHS01: Explosive
    Flammable = 'Flammable',  // GHS02: Flammable
    Oxidizing = 'Oxidizing',  // GHS03: Oxidizing
    GasUnderPressure = 'Gas Under Pressure',  // GHS04: Gas under pressure
    Corrosive = 'Corrosive',  // GHS05: Corrosive
    Toxic = 'Toxic',  // GHS06: Toxic
    HarmfulOrIrritant = 'Harmful/Irritant',  // GHS07: Harmful or irritant
    HealthHazard = 'Health Hazard',  // GHS08: Health hazard (chronic)
    EnvironmentalHazard = 'Environmental Hazard',  // GHS09: Environmental hazard
}

export const GHSSignToImage = (ghsSign:GHSSign) => {
    switch (ghsSign) {
        case GHSSign.Explosive: return explosive;
        case GHSSign.Flammable: return flammable;
        case GHSSign.Oxidizing: return oxidizing;
        case GHSSign.GasUnderPressure: return gasUnderPressure;
        case GHSSign.Corrosive: return corrosive;
        case GHSSign.Toxic: return toxic;
        case GHSSign.HarmfulOrIrritant: return harmfulOrIrritant;
        case GHSSign.HealthHazard: return healthHazard;
        case GHSSign.EnvironmentalHazard: return environmentalHazard;
        default: return harmfulOrIrritant
    }
}

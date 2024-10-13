import {GHSSign} from "./ghs.type";

export type Product = {
    company: string,
    name: string,
    type?: 1|2|3|4|5|6,
    ghsSign: GHSSign[],
    storage: string,
    msds: string,
    chemicals?: []
}

export const productList: Product[] = [
    {
        name: "Formaldehyde",
        company: "DAEJUNG",
        ghsSign: [
            GHSSign.Flammable,
            GHSSign.Toxic,
            GHSSign.Corrosive,
            GHSSign.HealthHazard,
        ],
        storage: "D1",
        msds: ""
    },
    {
        name: "Ethanol",
        company: "DAEJUNG",
        ghsSign: [
            GHSSign.Flammable,
            GHSSign.HealthHazard,
        ],
        storage: "D1",
        msds: "https://example.com/ethanol_msds.pdf"
    },
    {
        name: "Chlorine",
        company: "DAEJUNG",
        ghsSign: [
            GHSSign.GasUnderPressure,
            GHSSign.Corrosive,
            GHSSign.Toxic,
            GHSSign.EnvironmentalHazard,
        ],
        storage: "D1",
        msds: "https://example.com/chlorine_msds.pdf"
    },
    {
        name: "Sulfuric Acid",
        company: "DAEJUNG",
        ghsSign: [
            GHSSign.Corrosive,
            GHSSign.HealthHazard,
        ],
        storage: "D1",
        msds: "https://example.com/sulfuric_acid_msds.pdf"
    },
    {
        name: "Propane",
        company: "DAEJUNG",
        ghsSign: [
            GHSSign.Flammable,
            GHSSign.GasUnderPressure,
        ],
        storage: "D1",
        msds: "https://example.com/propane_msds.pdf"
    },
    {
        name: "Tetrahydrofuran",
        company: "DAEJUNG",
        ghsSign: [
            GHSSign.Flammable,
            GHSSign.HealthHazard,
        ],
        storage: "D3",
        msds: "https://example.com/tetrahydrofuran_msds.pdf"
    },
    {
        name: "Sodium Hydroxide",
        company: "DAEJUNG",
        ghsSign: [
            GHSSign.Corrosive,
        ],
        storage: "D2",
        msds: "https://example.com/sodium_hydroxide_msds.pdf"
    }
];

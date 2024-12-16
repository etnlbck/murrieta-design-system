
const lightMode = `
--primary-bg: #BCC5C5;
--secondary-bg: #798A8B;
--primary-text: #4A5455;
--secondary-text: #798A8B;
--link-text: #3A75BA;
--highlight: #F1C84B;
--warning-error: #E22029;
--success: #7CC258;

// Professional
--nl-primary: #4A5455;
--nl-secondary: #798A8B;
--nl-tertiary: #BCC5C5;

// Personal / Aura Glitch
--ag-yellow: #F1C84B;
--ag-magenta: #BC4377;
--ag-red: #E22029;

// Outdoors
--ag-blue: #3A75BA;
--ag-green: #7CC258;

// NL Primary
--nl-primary-50: #F7F8F8;
--nl-primary-100: #EEF0F0;
--nl-primary-200: #D9DEDE;
--nl-primary-300: #BCC5C5; // NL-Tertiary
--nl-primary-400: #919F9E;
--nl-primary-500: #738484;
--nl-primary-600: #5D6C6C;
--nl-primary-700: #4C5858;
--nl-primary-800: #414A4B;
--nl-primary-900: #394141;
--nl-primary-950: #262B2B;

//NL Secondary
--nl-secondary-50: #F5F6F6;
--nl-secondary-100: #E5E8E8;
--nl-secondary-200: #CDD4D4;
--nl-secondary-300: #AAB6B6;
--nl-secondary-400: #7F9091;
--nl-secondary-500: #647576;
--nl-secondary-600: #566364;
--nl-secondary-700: #4A5455;
--nl-secondary-800: #414849;
--nl-secondary-900: #393F40;
--nl-secondary-950: #232829;

//NL Tertiary
--nl-tertiary-50: #F5F6F6;
--nl-tertiary-100: #E5E8E8;
--nl-tertiary-200: #CDD4D4;
--nl-tertiary-300: #AAB6B6;
--nl-tertiary-400: #798A8B;
--nl-tertiary-500: #647476;
--nl-tertiary-600: #566264;
--nl-tertiary-700: #4A5354;
--nl-tertiary-800: #414849;
--nl-tertiary-900: #393F40;
--nl-tertiary-950: #232729;

//AG Yellow
--ag-yellow-50: #FEFAEC;
--ag-yellow-100: #FBF0CA;
--ag-yellow-200: #F6E191;
--ag-yellow-300: #F1C84B;
--ag-yellow-400: #EFB830;
--ag-yellow-500: #E89818;
--ag-yellow-600: #CD7412;
--ag-yellow-700: #AA5213;
--ag-yellow-800: #8A4116;
--ag-yellow-900: #723615;
--ag-yellow-950: #411A07;


//AG Magenta
--ag-magenta-50: #FBF4F8;
--ag-magenta-100: #F8EBF2;
--ag-magenta-200: #F4D6E7;
--ag-magenta-300: #EBB6D2;
--ag-magenta-400: #DE88B4;
--ag-magenta-500: #D06497;
--ag-magenta-600: #BC4377;
--ag-magenta-700: #A23460;
--ag-magenta-800: #872D50;
--ag-magenta-900: #712A46;
--ag-magenta-950: #441326;

//AG Red
--ag-red-50: #FEF2F3;
--ag-red-100: #FFE1E2;
--ag-red-200: #FFC8CB;
--ag-red-300: #FFA2A6;
--ag-red-400: #FC6D74;
--ag-red-500: #F53E46;
--ag-red-600: #E22029;
--ag-red-700: #BE171F;
--ag-red-800: #9D171D;
--ag-red-900: #821A1F;
--ag-red-950: #47080B;

//AG Blue
--ag-blue-50: #F3F6FC;
--ag-blue-100: #E6EDF8;
--ag-blue-200: #C8D9EF;
--ag-blue-300: #97B9E2;
--ag-blue-400: #5F94D1;
--ag-blue-500: #3A75BA;
--ag-blue-600: #2A5C9F;
--ag-blue-700: #234B81;
--ag-blue-800: #21406B;
--ag-blue-900: #20385A;
--ag-blue-950: #15233C;

//AG Green
--ag-green-50: #F1F9EC;
--ag-green-100: #E1F2D5;
--ag-green-200: #C4E6B0;
--ag-green-300: #9ED581;
--ag-green-400: #7CC258;
--ag-green-500: #5EA73B;
--ag-green-600: #47852B;
--ag-green-700: #386625;
--ag-green-800: #2F5222;
--ag-green-900: #2B4621;
--ag-green-950: #13260D;
`;


const darkMode = `
--primary-bg: #798A8B;
--secondary-bg: #DEE2E2;
--primary-text: #DEE2E2;
--secondary-text: #BCC5C5;
--link-text: #4CA8D6;
--highlight: #FAD84C;
--warning-error: #E7807E;
--success: #B4D99B;

// Professional
--nl-primary: #4A5455;
--nl-secondary: #798A8B;
--nl-tertiary: #BCC5C5;

// Personal / Aura Glitch
--ag-yellow: #FAD84C;
--ag-magenta: #F1A7B4;
--ag-red: #E7807E;

// Outdoors
--ag-blue: #4CA8D6;
--ag-green: #B4D99B;

// NL Primary
--nl-primary-50: #F7F8F8;
--nl-primary-100: #EEF0F0;
--nl-primary-200: #D9DEDE;
--nl-primary-300: #BCC5C5; // NL-Tertiary
--nl-primary-400: #919F9E;
--nl-primary-500: #738484;
--nl-primary-600: #5D6C6C;
--nl-primary-700: #4C5858;
--nl-primary-800: #414A4B;
--nl-primary-900: #394141;
--nl-primary-950: #262B2B;

//NL Secondary
--nl-secondary-50: #F5F6F6;
--nl-secondary-100: #E5E8E8;
--nl-secondary-200: #CDD4D4;
--nl-secondary-300: #AAB6B6;
--nl-secondary-400: #7F9091;
--nl-secondary-500: #647576;
--nl-secondary-600: #566364;
--nl-secondary-700: #4A5455;
--nl-secondary-800: #414849;
--nl-secondary-900: #393F40;
--nl-secondary-950: #232829;

//NL Tertiary
--nl-tertiary-50: #F5F6F6;
--nl-tertiary-100: #E5E8E8;
--nl-tertiary-200: #CDD4D4;
--nl-tertiary-300: #AAB6B6;
--nl-tertiary-400: #798A8B;
--nl-tertiary-500: #647476;
--nl-tertiary-600: #566264;
--nl-tertiary-700: #4A5354;
--nl-tertiary-800: #414849;
--nl-tertiary-900: #393F40;
--nl-tertiary-950: #232729;

//AG Yellow
--ag-yellow-50: #FEFAEC;
--ag-yellow-100: #FBF0CA;
--ag-yellow-200: #F6E191;
--ag-yellow-300: #F1C84B;
--ag-yellow-400: #EFB830;
--ag-yellow-500: #E89818;
--ag-yellow-600: #CD7412;
--ag-yellow-700: #AA5213;
--ag-yellow-800: #8A4116;
--ag-yellow-900: #723615;
--ag-yellow-950: #411A07;


//AG Magenta
--ag-magenta-50: #FBF4F8;
--ag-magenta-100: #F8EBF2;
--ag-magenta-200: #F4D6E7;
--ag-magenta-300: #EBB6D2;
--ag-magenta-400: #DE88B4;
--ag-magenta-500: #D06497;
--ag-magenta-600: #BC4377;
--ag-magenta-700: #A23460;
--ag-magenta-800: #872D50;
--ag-magenta-900: #712A46;
--ag-magenta-950: #441326;

//AG Red
--ag-red-50: #FEF2F3;
--ag-red-100: #FFE1E2;
--ag-red-200: #FFC8CB;
--ag-red-300: #FFA2A6;
--ag-red-400: #FC6D74;
--ag-red-500: #F53E46;
--ag-red-600: #E22029;
--ag-red-700: #BE171F;
--ag-red-800: #9D171D;
--ag-red-900: #821A1F;
--ag-red-950: #47080B;

//AG Blue
--ag-blue-50: #F3F6FC;
--ag-blue-100: #E6EDF8;
--ag-blue-200: #C8D9EF;
--ag-blue-300: #97B9E2;
--ag-blue-400: #5F94D1;
--ag-blue-500: #3A75BA;
--ag-blue-600: #2A5C9F;
--ag-blue-700: #234B81;
--ag-blue-800: #21406B;
--ag-blue-900: #20385A;
--ag-blue-950: #15233C;

//AG Green
--ag-green-50: #F1F9EC;
--ag-green-100: #E1F2D5;
--ag-green-200: #C4E6B0;
--ag-green-300: #9ED581;
--ag-green-400: #7CC258;
--ag-green-500: #5EA73B;
--ag-green-600: #47852B;
--ag-green-700: #386625;
--ag-green-800: #2F5222;
--ag-green-900: #2B4621;
--ag-green-950: #13260D;
`;
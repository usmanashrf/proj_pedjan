// safetyData.ts
export type OtherInformation = {
    id: string;
    label: string;
    checked: boolean;
    isImportant?: boolean;
  };
  
  export const otherInformationData: OtherInformation[] = [
    {
      id: "1",
      label: "First owner",
      checked: false,
      isImportant: true,
    },
    {
      id: "2",
      label: "Restored",
      checked: false,
    },
    {
      id: "3",
      label: "Tuning",
      checked: false,
    },
    {
        id: "4",
        label: "Taxi",
        checked: false,
      },
      {
        id: "5",
        label: "Bought a new in Norway",
        checked: false,
      },
      {
        id: "6",
        label: "Oldtimer",
        checked: false,
      },
      {
        id: "7",
        label: "Driving school vehicle",
        checked: false,
        isImportant: true,
      },
      {
        id: "8",
        label: "Test vehicle",
        checked: false,
      },
      {
        id: "9",
        label: "Garaged",
        checked: false,
      },
      {
        id: "10",
        label: "Adapted for the disabled",
        checked: false,
      },
      {
        id: "11",
        label: "Service book",
        checked: false,
      },
      {
        id: "12",
        label: "Second key",
        checked: false,
      },
  ];
  
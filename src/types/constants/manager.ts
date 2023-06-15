export type managerAcceptanceType = {
  id: number;
  manager: string;

  serviceInfo: serviceInfoType;
  reservationInfo: reservationType;
};

export type serviceInfoType = {
  serviceDate: string;
  serviceDuration: string;
  servicePerPerson: number;
  location: string;
};

export type reservationType = {
  parkingAvailable: string;
  reservationEnter: string;
  reservationNote: string;
  reservationRequest: string;
};

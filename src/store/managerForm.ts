import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Store = {
  // aaaaaaaaa
  managerName: string;
  managerPhoneNumber: string;
  activityDay: boolean[];
  region: { [key: string]: string[] };
  certificateStatus: string;
  certificateStatusEtc: any;
  fieldExperience: string;
  mainJobStatus: boolean | string | null;
  mainJobStatusEtc: any;
  vehicle: boolean | null;
};

type Actions = {
  setManagerName: (name: string) => void;
  clearManagerName: () => void;
  setPhoneNumber: (phoneNumber: string) => void;
  clearPhoneNumber: () => void;
  setDay: (index: number, isChecked: boolean) => void;
  setActivityRegion: (selectedRegion: string, district: string) => void;
  setFilterLocation: (district: string) => void;
  setRemoveTag: (district: string) => void;
  setManagerLicense: (certificate: string) => void;
  setManagerLicenseEtc: (certificateEtc: string) => void;
  clearManagerLicenseEtc: () => void;
  nullManagerLicenseEtc: () => void;
  setFieldExperience: (experience: string) => void;
  setMainJob: (job: boolean) => void;
  setMainJobEtc: (job: string) => void;
  clearMainJobEtc: () => void;
  setManagerDrive: (drive: boolean) => void;
  setMainJobEtcNull: () => void;
};

const useManagerFormStore = create<Store & Actions>()(
  persist(
    (set) => ({
      managerName: '',
      managerPhoneNumber: '',
      activityDay: [false, false, false, false, false, false, false],
      region: { 서울특별시: [], 경기도: [] },
      certificateStatus: '',
      certificateStatusEtc: null,
      fieldExperience: '',
      mainJobStatus: null,
      mainJobStatusEtc: null,
      vehicle: null,

      setManagerName: (managerName) => set(() => ({ managerName })),
      clearManagerName: () => set(() => ({ managerName: '' })),
      setPhoneNumber: (managerPhoneNumber) => set(() => ({ managerPhoneNumber })),
      clearPhoneNumber: () => set(() => ({ managerPhoneNumber: '' })),
      setDay: (index, isChecked) =>
        set((state) => ({
          activityDay: state.activityDay.map((value, i) => (i === index ? isChecked : value)),
        })),
      setActivityRegion: (selectedRegion, district) =>
        set((state) => {
          let updatedRegionData;

          if (selectedRegion === '서울특별시') {
            updatedRegionData = {
              ...state.region,
              서울특별시: [...state.region.서울특별시, district],
            };
          } else if (selectedRegion === '경기도') {
            updatedRegionData = {
              ...state.region,
              경기도: [...state.region.경기도, district],
            };
          }

          return {
            region: updatedRegionData,
          };
        }),
      setFilterLocation: (district) =>
        set((state) => {
          let updatedSeoul = [...state.region.서울특별시];
          let updatedGyeonggi = [...state.region.경기도];

          if (state.region.서울특별시.includes(district)) {
            updatedSeoul = updatedSeoul.filter((selectedDistrict) => selectedDistrict !== district);
          }

          if (state.region.경기도.includes(district)) {
            updatedGyeonggi = updatedGyeonggi.filter((selectedDistrict) => selectedDistrict !== district);
          }

          return {
            region: {
              서울특별시: updatedSeoul,
              경기도: updatedGyeonggi,
            },
          };
        }),
      setRemoveTag: (district: string) => {
        set((state) => {
          let updatedSeoul = state.region.서울특별시;
          let updatedGyeonggi = state.region.경기도;

          if (state.region.서울특별시.includes(district)) {
            updatedSeoul = updatedSeoul.filter((selectedDistrict) => !selectedDistrict.includes(district));
          }

          if (state.region.경기도.includes(district)) {
            updatedGyeonggi = updatedGyeonggi.filter((selectedDistrict) => !selectedDistrict.includes(district));
          }

          return {
            region: {
              서울특별시: updatedSeoul,
              경기도: updatedGyeonggi,
            },
          };
        });
      },
      setManagerLicense: (certificate) => {
        let manager_license;

        if (certificate === '1급 (오프라인 취득)') {
          manager_license = 'FIRST_RATE_OFF';
        } else if (certificate === '2급 (오프라인 취득)') {
          manager_license = 'SECOND_RATE_OFF';
        } else if (certificate === '1급 (온라인 취득)') {
          manager_license = 'FIRST_RATE_ON';
        } else if (certificate === '2급 (온라인 취득)') {
          manager_license = 'SECOND_RATE_ON';
        } else if (certificate === '없음') {
          manager_license = 'NONE';
        } else if (certificate === '기타') {
          manager_license = 'ETC';
        }

        set({ certificateStatus: manager_license });
      },
      setManagerLicenseEtc: (certificateEtc) => set(() => ({ certificateStatusEtc: certificateEtc })),
      clearManagerLicenseEtc: () => set(() => ({ certificateStatusEtc: '' })),
      nullManagerLicenseEtc: () => set(() => ({ certificateStatusEtc: '입력없음' })),
      setFieldExperience: (experience) => set(() => ({ fieldExperience: experience })),
      setMainJob: (job) => set(() => ({ mainJobStatus: job })),
      setMainJobEtc: (job) => set(() => ({ mainJobStatusEtc: job })),
      setMainJobEtcNull: () => set(() => ({ mainJobStatusEtc: null })),
      clearMainJobEtc: () => set(() => ({ mainJobStatusEtc: '' })),
      setManagerDrive: (drive) => set(() => ({ vehicle: drive })),
    }),
    {
      name: 'manager-form-store',
      partialize: (state) => ({
        managerName: state.managerName,
        managerPhoneNumber: state.managerPhoneNumber,
        activityDay: state.activityDay,
        region: state.region,
        certificateStatus: state.certificateStatus,
        certificateStatusEtc: state.certificateStatusEtc,
        fieldExperience: state.fieldExperience,
        mainJobStatus: state.mainJobStatus,
        mainJobStatusEtc: state.mainJobStatusEtc,
        vehicle: state.vehicle,
      }),
    },
  ),
);

export default useManagerFormStore;

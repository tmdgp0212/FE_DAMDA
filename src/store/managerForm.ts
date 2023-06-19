import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Store = {
  manager_name: string;
  manager_phone: string;
  activity_day: boolean[];
  activity_region: { [key: string]: string[] };
  manager_license: string;
  manager_license_etc: any;
  field_experience: string;
  main_job: boolean | null;
  main_job_etc: any;
  manager_drive: boolean | null;
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
      manager_name: '',
      manager_phone: '',
      activity_day: [false, false, false, false, false, false, false],
      activity_region: { 서울특별시: [], 경기도: [] },
      manager_license: '',
      manager_license_etc: null,
      field_experience: '',
      main_job: null,
      main_job_etc: null,
      manager_drive: null,

      setManagerName: (name) => set(() => ({ manager_name: name })),
      clearManagerName: () => set(() => ({ manager_name: '' })),
      setPhoneNumber: (phoneNumber) => set(() => ({ manager_phone: phoneNumber })),
      clearPhoneNumber: () => set(() => ({ manager_phone: '' })),
      setDay: (index, isChecked) =>
        set((state) => ({
          activity_day: state.activity_day.map((value, i) => (i === index ? isChecked : value)),
        })),
      setActivityRegion: (selectedRegion, district) =>
        set((state) => {
          let updatedRegionData;

          if (selectedRegion === '서울특별시') {
            updatedRegionData = {
              ...state.activity_region,
              서울특별시: [...state.activity_region.서울특별시, district],
            };
          } else if (selectedRegion === '경기도') {
            updatedRegionData = {
              ...state.activity_region,
              경기도: [...state.activity_region.경기도, district],
            };
          }

          return {
            activity_region: updatedRegionData,
          };
        }),
      setFilterLocation: (district) =>
        set((state) => {
          let updatedSeoul = [...state.activity_region.서울특별시];
          let updatedGyeonggi = [...state.activity_region.경기도];

          if (state.activity_region.서울특별시.includes(district)) {
            updatedSeoul = updatedSeoul.filter((selectedDistrict) => selectedDistrict !== district);
          }

          if (state.activity_region.경기도.includes(district)) {
            updatedGyeonggi = updatedGyeonggi.filter((selectedDistrict) => selectedDistrict !== district);
          }

          return {
            activity_region: {
              서울특별시: updatedSeoul,
              경기도: updatedGyeonggi,
            },
          };
        }),
      setRemoveTag: (district: string) => {
        set((state) => {
          let updatedSeoul = state.activity_region.서울특별시;
          let updatedGyeonggi = state.activity_region.경기도;

          if (state.activity_region.서울특별시.includes(district)) {
            updatedSeoul = updatedSeoul.filter((selectedDistrict) => !selectedDistrict.includes(district));
          }

          if (state.activity_region.경기도.includes(district)) {
            updatedGyeonggi = updatedGyeonggi.filter((selectedDistrict) => !selectedDistrict.includes(district));
          }

          return {
            activity_region: {
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

        set({ manager_license });
      },
      setManagerLicenseEtc: (certificateEtc) => set(() => ({ manager_license_etc: certificateEtc })),
      clearManagerLicenseEtc: () => set(() => ({ manager_license_etc: '' })),
      nullManagerLicenseEtc: () => set(() => ({ manager_license_etc: null })),
      setFieldExperience: (experience) => set(() => ({ field_experience: experience })),
      setMainJob: (job) => set(() => ({ main_job: job })),
      setMainJobEtc: (job) => set(() => ({ main_job_etc: job })),
      setMainJobEtcNull: () => set(() => ({ main_job_etc: null })),
      clearMainJobEtc: () => set(() => ({ main_job_etc: '' })),
      setManagerDrive: (drive) => set(() => ({ manager_drive: drive })),
    }),
    {
      name: 'manager-form-store',
      partialize: (state) => ({
        manager_name: state.manager_name,
        manager_phone: state.manager_phone,
        activity_day: state.activity_day,
        activity_region: state.activity_region,
        manager_license: state.manager_license,
        manager_license_etc: state.manager_license_etc,
        field_experience: state.field_experience,
        main_job: state.main_job,
        main_job_etc: state.main_job_etc,
        manager_drive: state.manager_drive,
      }),
    },
  ),
);

export default useManagerFormStore;

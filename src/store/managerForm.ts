import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Store = {
  manager_name: string;
  manager_phone: string;
  activity_day: Array<boolean>;
  activity_region: { activity_city: string[]; activity_district: string[] };
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
  setActivityCity: (city: string) => void;
  setActivityDistrict: (district: string) => void;
  removeActivityDistrict: (district: string) => void;
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
      activity_region: { activity_city: [], activity_district: [] },
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
      setActivityCity: (city) =>
        set((state) => ({
          activity_region: {
            activity_city: [...state.activity_region.activity_city, city],
            activity_district: [...state.activity_region.activity_district],
          },
        })),
      setActivityDistrict: (district) =>
        set((state) => ({
          activity_region: {
            activity_city: [...state.activity_region.activity_city],
            activity_district: [...state.activity_region.activity_district, district],
          },
        })),
      removeActivityDistrict: (enteredDistrict) =>
        set((state) => {
          const i = state.activity_region.activity_district.indexOf(enteredDistrict);
          state.activity_region.activity_city.splice(i, 1);

          const filteredArr = state.activity_region.activity_district.filter(
            (district) => district !== enteredDistrict,
          );

          return {
            activity_region: {
              activity_city: state.activity_region.activity_city,
              activity_district: filteredArr,
            },
          };
        }),
      setManagerLicense: (certificate) => set(() => ({ manager_license: certificate })),
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

export function managerFormReducer(state: any, action: any) {
  switch (action.type) {
    case 'NAME':
      return { ...state, manager_name: action.payload.name };

    case 'NAME_CLEAR':
      return { ...state, manager_name: '' };

    case 'PHONE_NUMBER':
      return { ...state, manager_phone: action.payload.phoneNumber };

    case 'PHONE_NUMBER_CLEAR':
      return { ...state, manager_phone: '' };

    case 'DAY':
      if (action.payload.isCheck) {
        const checkIndex = Number(action.payload.day);
        const updateCheckState = [...state.activity_day];
        updateCheckState[checkIndex] = true;

        return { ...state, activity_day: updateCheckState };
      } else {
        const unCheckIndex = action.payload.day;
        const updateUnCheckState = [...state.activity_day];
        updateUnCheckState[unCheckIndex] = false;

        return { ...state, activity_day: updateUnCheckState };
      }

    case 'PUSH_CITY':
      return {
        ...state,
        activity_region: {
          activity_city: [...state.activity_region.activity_city, action.payload.city],
          activity_district: [...state.activity_region.activity_district],
        },
      };

    case 'PUSH_DISTRICT':
      return {
        ...state,
        activity_region: {
          activity_city: [...state.activity_region.activity_city],
          activity_district: [...state.activity_region.activity_district, action.payload.district],
        },
      };

    case 'REMOVE':
      const enteredDistrict = action.payload.district;
      const cityArr = state.activity_region.activity_city;
      const districtArr = state.activity_region.activity_district;
      const index = districtArr.indexOf(enteredDistrict);
      cityArr.splice(index, 1);
      const filteredDistrictArr = districtArr.filter((district: string) => district !== enteredDistrict);

      return {
        ...state,
        activity_region: {
          activity_city: cityArr,
          activity_district: filteredDistrictArr,
        },
      };

    case 'CERTIFICATE':
      return { ...state, manager_license: action.payload.certificate };

    case 'CERTIFICATE_ETC':
      return { ...state, manager_license_etc: action.payload.certificate_etc };

    case 'CERTIFICATE_ETC_CLEAR':
      return { ...state, manager_license_etc: '' };

    case 'FIELD_EXPERIENCE':
      return { ...state, field_experience: action.payload.field_experience };

    case 'MAIN_JOB':
      return { ...state, main_job: action.payload.main_job };

    case 'MAIN_JOB_ETC':
      return { ...state, main_job_etc: action.payload.main_job2 };

    case 'MAIN_JOB_ETC_NULL':
      return { ...state, main_job_etc: null };

    case 'MAIN_JOB_ETC_CLEAR':
      return { ...state, main_job_etc: '' };

    case 'DRIVE':
      return { ...state, manager_drive: action.payload.drive };

    default:
      return state;
  }
}

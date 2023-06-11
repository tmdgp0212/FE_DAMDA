export function managerFormReducer(state, action) {
  switch (action.type) {
    case 'NAME':
      return { ...state, manager_name: action.payload.name };

    case 'PHONE_NUMBER':
      return { ...state, manager_phone: action.payload.phoneNumber };

    case 'DAY':
      return { ...state, activity_day: [...state.activity_day, action.payload.day] };

    case 'ACTIVITY_REGION':
      let updatedRegionData;
      const { region, district } = action.payload;

      if (region === 'seoul') {
        updatedRegionData = {
          ...state.activity_region,
          seoul: [...state.activity_region.seoul, district],
        };
      } else if (region === 'gyeonggi') {
        updatedRegionData = {
          ...state.activity_region,
          gyeonggi: [...state.activity_region.gyeonggi, district],
        };
      }

      return {
        ...state,
        activity_region: updatedRegionData,
      };

    case 'FILTER_LOCATION':
      const { city } = action.payload;
      let updatedSeoul = [...state.activity_region.seoul];
      let updatedGyeonggi = [...state.activity_region.gyeonggi];

      if (state.activity_region.seoul.includes(city)) {
        updatedSeoul = updatedSeoul.filter((selectedCity) => selectedCity !== city);
      }

      if (state.activity_region.gyeonggi.includes(city)) {
        updatedGyeonggi = updatedGyeonggi.filter((selectedCity) => selectedCity !== city);
      }

      return {
        ...state,
        activity_region: {
          ...state.activity_region,
          seoul: updatedSeoul,
          gyeonggi: updatedGyeonggi,
        },
      };

    case 'CERTIFICATE':
      return { ...state, manager_license: action.payload.certificate };

    case 'CERTIFICATE_ETC':
      return { ...state, manager_license_etc: action.payload.certificate_etc };

    case 'FIELD_EXPERIENCE':
      return { ...state, field_experience: action.payload.field_experience };

    case 'MAIN_JOB':
      return { ...state, main_job: action.payload.main_job };

    case 'MAIN_JOB_ETC':
      return { ...state, main_job_etc: action.payload.main_job2 };

    case 'DRIVE':
      return { ...state, manager_drive: action.payload.drive };

    default:
      return state;
  }
}

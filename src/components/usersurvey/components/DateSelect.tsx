import React, { useState } from 'react';
import { UserSurveyDateProps } from '@/types/components/form';
import { UserSurveyFormDateWrapper } from '@/styles/survey.styled';
import ko from 'date-fns/locale/ko';
import { CaptionProps, DayOfWeek, DayPicker, useNavigation } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { AiOutlineLeft, AiOutlineRight, AiOutlineUp } from 'react-icons/ai';
import { format } from 'date-fns';
import { motion, Variants } from 'framer-motion';
import { UserSurveyForm } from '@/store/userSurvey';

const dayOfWeekMatcher: DayOfWeek = {
  dayOfWeek: [6, 0],
};

const variants: Variants = {
  hover: {
    backgroundColor: '#0061FF',
    color: '#fff',
  },
};

const timeCategory = [
  {
    id: 1,
    time: '오전 9시',
    timeValue: '09:00:00',
  },
  {
    id: 2,
    time: '오전 10시',
    timeValue: '10:00:00',
  },
  {
    id: 3,
    time: '오전 11시',
    timeValue: '11:00:00',
  },
  {
    id: 4,
    time: '오후 1시',
    timeValue: '13:00:00',
  },
  {
    id: 5,
    time: '오후 2시',
    timeValue: '14:00:00',
  },
  {
    id: 6,
    time: '오후 3시',
    timeValue: '15:00:00',
  },
];
function CustomCaption(props: CaptionProps) {
  const { goToMonth, nextMonth, previousMonth } = useNavigation();
  return (
    <h2 className="caption">
      <div onClick={() => previousMonth && goToMonth(previousMonth)}>
        <AiOutlineLeft />
      </div>
      <span>{format(props.displayMonth, 'M월')}</span>
      <div onClick={() => nextMonth && goToMonth(nextMonth)}>
        <AiOutlineRight />
      </div>
    </h2>
  );
}

function DateSelect({ handleUpdateFormValue, formData }: UserSurveyDateProps) {
  const { questionNumber, questionTitle, placeHolder, questionIdentify } = formData;
  const [isDayOpen, setIsDayOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState('');

  const handleDayClick = (day: Date) => {
    setIsDayOpen(false);
    setSelectedDay(day);
  };

  const handleTimeClick = (time: string) => {
    if (!selectedDay) return;

    setSelectedTime(time);
    const currentData: UserSurveyForm = {
      questionNumber,
      answer: `${format(selectedDay as Date, 'yyyy-MM-dd')} ${time}`,
      questionIdentify,
    };

    handleUpdateFormValue((prev) => {
      const isExist = prev.find((data) => data.questionNumber === questionNumber);
      if (isExist) {
        return prev.map((data) => (data.questionNumber === questionNumber ? currentData : data));
      } else {
        return [...prev, currentData];
      }
    });
  };

  return (
    <UserSurveyFormDateWrapper>
      <div className="title">{questionTitle}</div>
      <div className="select-body" onClick={() => setIsDayOpen(!isDayOpen)}>
        <span>
          {selectedDay
            ? format(selectedDay, 'yyyy년 MM월 dd일 (ccc) ', { locale: ko })
            : '서비스 날짜를 선택해 주세요.'}
        </span>
        <AiOutlineUp />
      </div>
      {isDayOpen && (
        <DayPicker
          locale={ko}
          weekStartsOn={0}
          selected={selectedDay}
          hideHead
          modifiers={{ dayOfWeekMatcher }}
          onDayClick={(day) => handleDayClick(day)}
          components={{
            Caption: CustomCaption,
          }}
          modifiersClassNames={{ dayOfWeekMatcher: 'dayOfWeekMatcher' }}
        />
      )}
      <div className="select-wrapper">
        <span>시작하고 싶은 시간을 선택해주세요.</span>
        <div className="select-list">
          {timeCategory.map((time, index) => (
            <motion.span
              className="select-item"
              key={index}
              whileHover="hover"
              animate={selectedTime === time.timeValue ? 'hover' : 'none'}
              variants={variants}
              onClick={() => handleTimeClick(time.timeValue)}
            >
              {time.time}
            </motion.span>
          ))}
        </div>
      </div>
    </UserSurveyFormDateWrapper>
  );
}

export default DateSelect;

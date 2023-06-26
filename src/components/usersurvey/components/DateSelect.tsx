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

const formatTime = (timeString: string) => {
  const timeParts = timeString.split(' ');
  const isPm = timeParts[0];
  let hour = parseInt(timeParts[1], 10);

  if (isPm === '오후') {
    hour += 12;
  }

  return hour.toString().padStart(2, '0') + ':00:00';
};

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
  const { questionNumber, questionTitle, placeHolder, questionIdentify, categoryList: timeList } = formData;
  const [isDayOpen, setIsDayOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState('');

  const AmTimeList = timeList?.filter((time) => time.category.includes('오전'));
  const PmTimeList = timeList?.filter((time) => time.category.includes('오후'));

  const handleDayClick = (day: Date) => {
    setIsDayOpen(false);
    setSelectedDay(day);
  };

  const handleTimeClick = (time: string) => {
    if (!selectedDay) return;
    const formattedTime = formatTime(time);
    setSelectedTime(time);

    const currentData: UserSurveyForm = {
      questionNumber,
      answer: `${format(selectedDay as Date, 'yyyy-MM-dd')} ${formattedTime}`,
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

    console.log(currentData);
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
          <div className="select-time-list am">
            {AmTimeList?.map((time, index) => (
              <motion.span
                className="select-item"
                key={index}
                whileHover="hover"
                variants={variants}
                animate={selectedTime === time.category ? 'hover' : 'none'}
                onClick={() => handleTimeClick(time.category)}
              >
                {time.category}
              </motion.span>
            ))}
          </div>
          <div className="select-time-list pm">
            {PmTimeList?.map((time, index) => (
              <motion.span
                className="select-item"
                key={index}
                whileHover="hover"
                variants={variants}
                animate={selectedTime === time.category ? 'hover' : 'none'}
                onClick={() => handleTimeClick(time.category)}
              >
                {time.category}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </UserSurveyFormDateWrapper>
  );
}

export default DateSelect;

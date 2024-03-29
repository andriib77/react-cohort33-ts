import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "components/Input/Input";
import Button from "components/Button/Button";

import {
  EmployeeFormWrapper,
  EmployeeFormContainer,
  EmployeeCard,
  EmployeeInfoContainer,
  EmployeeInfoText,
  EmployeeTitle,
  ErrorContainer,
  Checkbox,
  CheckboxLabel,
  CheckboxTitel,
} from "./styles";

function EmployeeForm() {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Обязательное поле")
      .min(2, "Минимальное количество символов - 2")
      .max(50, "Максимальное количество символов - 50"),
    lastName: Yup.string()
      .required("Обязательное поле")
      .max(15, "Максимальное количество символов - 15"),
    age: Yup.number()
      .required("Обязательное поле")
      .min(1, "Минимальное количество символов - 1")
      .max(99, "Максимальное количество символов - 99"),
    jobPosition: Yup.string().max(30, "Максимальное количество символов - 30"),
    agreement: Yup.boolean().oneOf(
      [true],
      "Необходимо согласиться с правилами использования"
    ),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      age: "",
      jobPosition: "",
      agreement: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setUserInfo(values);
      setIsShowCard(true);
    },
  });

  const [userInfo, setUserInfo] = useState({
    name: "",
    lastName: "",
    age: "",
    jobPosition: "",
  });

  const [isShowCard, setIsShowCard] = useState(false);

  return (
    <EmployeeFormWrapper>
      <EmployeeFormContainer onSubmit={formik.handleSubmit}>
        <Input
          id="first_name_id"
          name="name"
          onChange={formik.handleChange}
          error={formik.errors.name}
          value={formik.values.name}
          label="Имя*"
          placeholder="Иван"
        />
        <Input
          id="last_name_id"
          name="lastName"
          onChange={formik.handleChange}
          error={formik.errors.lastName}
          value={formik.values.lastName}
          label="Фамилия*"
          placeholder="Василевский"
        />
        <Input
          id="age_id"
          name="age"
          onChange={formik.handleChange}
          error={formik.errors.age}
          value={formik.values.age}
          label="Возраст*"
          placeholder="25"
        />
        <Input
          id="job_position_id"
          name="jobPosition"
          onChange={formik.handleChange}
          error={formik.errors.jobPosition}
          value={formik.values.jobPosition}
          label="Должность"
          placeholder="Старший специалист"
        />
        <CheckboxTitel>Правила использования</CheckboxTitel>
        <CheckboxLabel>
          <Checkbox
            type="checkbox"
            name="agreement"
            value="Правила использования"
            checked={formik.values.agreement}
            onChange={formik.handleChange}
          />
          Я согласен с политикой обработки данных*
        </CheckboxLabel>
        {formik.touched.agreement && formik.errors.agreement ? (
          <ErrorContainer>{formik.errors.agreement}</ErrorContainer>
        ) : null}
        <Button name="Создать" type="submit" />
      </EmployeeFormContainer>
      {/* Если в левой части от && у вас false, то правая часть(JSX элементы) не показываются, 
      если же левая часть от && true, то правая часть(JSX элементы) отображается */}
      {isShowCard && (
        <EmployeeCard>
          <EmployeeInfoContainer>
            <EmployeeTitle>Имя</EmployeeTitle>
            <EmployeeInfoText>{userInfo.name}</EmployeeInfoText>
          </EmployeeInfoContainer>
          <EmployeeInfoContainer>
            <EmployeeTitle>Фамилия</EmployeeTitle>
            <EmployeeInfoText>{userInfo.lastName}</EmployeeInfoText>
          </EmployeeInfoContainer>
          <EmployeeInfoContainer>
            <EmployeeTitle>Возраст</EmployeeTitle>
            <EmployeeInfoText>{userInfo.age}</EmployeeInfoText>
          </EmployeeInfoContainer>
          {!!userInfo.jobPosition && (
            <EmployeeInfoContainer>
              <EmployeeTitle>Должность</EmployeeTitle>
              <EmployeeInfoText>{userInfo.jobPosition}</EmployeeInfoText>
            </EmployeeInfoContainer>
          )}
        </EmployeeCard>
      )}
    </EmployeeFormWrapper>
  );
}

export default EmployeeForm;

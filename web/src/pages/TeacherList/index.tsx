import React, { useState, FormEvent } from 'react';

import './styles.css'

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

function TeacherList() {
  const [teachers, setTeachers] = useState([])

  const [subject, setSubject] = useState('')
  const [week_day, setWeek_day] = useState('')
  const [time, setTime] = useState('')

  async function searchTeachers(event: FormEvent) {
    event.preventDefault()

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      }
    })

    setTeachers(response.data)
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={event => { setSubject(event.target.value) }}

            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Lógica de programação', label: 'Lógica de programação' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Português', label: 'Português' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'Filosofia', label: 'Filosofia' },
              { value: 'História', label: 'História' },
              { value: 'Biologia', label: 'Biologia' },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={event => { setWeek_day(event.target.value) }}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />
          <Input
            value={time}
            onChange={event => { setTime(event.target.value) }}
            type="time"
            name="time"
            label="Hora" />
          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem teacher={teacher} key={teacher.id} />
        })}
      </main>
    </div>
  );
}

export default TeacherList;
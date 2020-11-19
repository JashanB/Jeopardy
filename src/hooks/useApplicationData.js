import { useEffect, useReducer } from "react"
import axios from 'axios';


import reducer from '../components/reducer';

export default function useApplicationData() {

  const [state, dispatch] = useReducer(reducer, {
    currentPoints: 0, 
    round: 1, 
    question: '', 
    answer: '', 
    questionClicked: false
  });

  function cancelInterview(appointmentId) {
    return axios.delete(`/api/appointments/${appointmentId}`)
      .then(() => {
        //update day spots
        const daySpots = findDays(state, appointmentId)
        if (daySpots.spots < 5) {
          const days = updateDays(state, appointmentId, 1)
          dispatch({ type: SET_SPOTS, days: days })
        }
      })
      .then(() => {
        const appointment = state.appointments[appointmentId]
        appointment.interview = null
        dispatch({ type: SET_INTERVIEW, interview: { ...state.appointments, [appointmentId]: appointment } })
      })
  }

  function setDay(day) {
    dispatch({ type: SET_DAY, day: day })
  }

  return { state, setDay, bookInterview, cancelInterview }
}
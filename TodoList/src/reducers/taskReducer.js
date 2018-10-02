import { ADD_TASK, TOGGLE_TASK, DEL_TASK } from '../actions/type'

export default function (state = [], action) {
    switch (action.type) {
        case ADD_TASK:
            //1. check xem ngay do da co task nao chua
            const taskOfDay = state.filter(item => item.id === action.payload.id)
            if (taskOfDay.length === 0) {
                // lay tat ca obj trong data cu

                // add them obj moi 

                // sort lai list theo time
                return [
                    ...state,
                    {
                        id: action.payload.id,
                        date: action.payload.date,
                        data: [
                            action.payload.task
                        ]

                    }
                ].sort((day1, day2) => day1.id - day2.id)
            } else {
                // add them vao ngay do
                // sort
                return [
                    // lay tat ca obj trong list cu tru ngay can add ra
                    ...(state.filter(item => item.id !== action.payload.id)),
                    {

                        id: action.payload.id,
                        date: action.payload.date,
                        data: [
                            action.payload.task,
                            ...(taskOfDay[0].data)
                        ].sort((task1, task2) => task1.id - task2.id)

                    }

                ].sort((day1, day2) => day1.id - day2.id)
            }
        case TOGGLE_TASK:
            return state.map(item => (item.id === action.payload.dayId)
                ? {
                    id: item.id,
                    date: item.date,
                    data: item.data.map(task => (task.id === action.payload.taskId)
                        ? {
                            id: task.id,
                            category: task.category,
                            content: task.content,
                            time: task.time,
                            isDone: !task.isDone
                        }
                        : task)
                }
                : item)
        case DEL_TASK:
            const taskDel = state.filter(item => item.id === action.payload.dayId)
            return [
                ...(state.filter(item => item.id !== action.payload.dayId)),
                {
                    id: taskDel[0].id,
                    date: taskDel[0].date,
                    data: taskDel[0].data
                        .filter(task => task.id !== action.payload.taskId)
                }
            ].sort((day1, day2) => day1.id - day2.id)

        //2. add task vao
        // 3. sort time
        default:
            return state
    }
}
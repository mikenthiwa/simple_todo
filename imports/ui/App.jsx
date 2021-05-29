import React from 'react';
import { useTracker } from "meteor/react-meteor-data";
import {TasksCollection} from "../api/TasksCollection";


export const App = () => {
    const tasks = useTracker(() => TasksCollection.find({}).fetch());
    return (
        <div>
            <h1>Welcome to Meteor!</h1>
            <ul>
                { tasks.map(task => <li key={task._id}>{task.text}</li> ) }
            </ul>
        </div>
    )
};

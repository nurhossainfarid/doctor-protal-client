import el from 'date-fns/esm/locale/el/index.js';
import React from 'react';
import { toast } from 'react-toastify';

const DoctorsRow = ({ doctor, index, refetch, setDeletingDoctor}) => {
    const { name, img, specialty } = doctor;

    return (
        <tr>
            <td>{index + 1}</td>
            <td className='avatar'>
            <div class="w-16 rounded-full">
                <img src={img} />
            </div>
            </td>
            <td>Dr. {name}</td>
            <td>{specialty}</td>
            <td>
                <label onClick={() => setDeletingDoctor(doctor)} for="doctor-delete-modal" class="btn btn-error">Delete</label>
            </td>
        </tr> 
    );
};

export default DoctorsRow;
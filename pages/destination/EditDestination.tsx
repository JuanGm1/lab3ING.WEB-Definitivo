import { NextPage } from 'next/types';
import { useMutation, useQuery } from '@apollo/client';
import { SyntheticEvent, useEffect, useState } from 'react';
import { UPDATE_DESTINATION,DELETE_DESTINATION } from '@graphql/client/destinations/mutations/destinations';
import GET_DESTINATION from '@graphql/client/destinations/queries/destinations';
const EditDestination: NextPage = ({ id }) => {
    const destinationId = id;
    const [updateDestination] = useMutation(UPDATE_DESTINATION);
    const [deleteDestination] = useMutation(DELETE_DESTINATION);

    const [name, setName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const { data, loading } = useQuery(GET_DESTINATION, {
        variables: {
            getTravelId: destinationId,
        }, fetchPolicy: 'no-cache',
    });

    useEffect(() => {
        if (!loading) {
            setName(data.getTravel.name)
            const sdYear = data.getTravel.startDate.substring(0, 4) + "-"
            const sdMonth = data.getTravel.startDate.substring(5, 7) + "-"
            const sdDay = data.getTravel.startDate.substring(8, 10)
            const edYear = data.getTravel.endDate.substring(0, 4) + "-"
            const edMonth = data.getTravel.endDate.substring(5, 7) + "-"
            const edDay = data.getTravel.endDate.substring(8, 10)
            setStartDate(sdYear + sdMonth + sdDay)
            setEndDate(edYear + edMonth + edDay)
        }

    }, [data])

    const call = async (e: SyntheticEvent) => {

        e.preventDefault();
        const correctDates = startDate < endDate
        const now = new Date()
        const correctFuture = startDate >= now.toISOString()

        var msg = ''
        if (!correctDates) {
            msg = 'La fecha de inicio debe ser menor a la fecha de fin del viaje'
        } if (!correctFuture) {
            msg += 'La fecha de inicio debe ser a futuro'
        }


        if (correctDates && correctFuture) {
            await updateDestination({
                variables: {
                    updateDestinationId: destinationId,
                    name: name,
                    startDate: startDate,
                    endDate: endDate,
                },
            });
        } else {
            alert(msg)
        }
    };




    const deleteT = async (e: SyntheticEvent) => {

        e.preventDefault();

        await deleteDestination({
            variables: {
                deleteDestinationId: destinationId,
            },
        });
    };

    return (
        <div>

            <h1>Travel</h1>
            <input value={name} name="firstName" onChange={e => setName(e.target.value)} />
            <span>Fecha Inicio: </span>
            <input placeholder='Fecha inicio' name='startDate' type='date' value={startDate} onChange={e => setStartDate(e.target.value)} />
            <input placeholder='Fecha fin' name='endDate' type='date' value={endDate} onChange={e => setEndDate(e.target.value)} />
            <button type='submit' className='border-2 ml-4' onClick={call}>
                enviar
            </button>
            <button type='submit' className='border-2 ml-4' onClick={deleteT}>
                eliminar
            </button>

        </div>
    );
};

export default EditDestination;
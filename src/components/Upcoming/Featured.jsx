import React, { useEffect, useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthContext'; // Adjust if your context path is different
import { useNavigate } from 'react-router-dom';

const FeaturedEventCard = ({ event }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [hasJoined, setHasJoined] = useState(false);
  const [localAttendeeCount, setLocalAttendeeCount] = useState(event.attendeeCount || 0);

  useEffect(() => {
    if (user && event.attendees?.includes(user._id)) {
      setHasJoined(true);
    }
  }, [user, event.attendees]);

  const handleJoin = async () => {
    if (!user) {
      const result = await Swal.fire({
        title: 'Please login to join the event.',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Login',
        cancelButtonText: 'Cancel',
      });

      if (result.isConfirmed) {
        navigate('/login');
      }

      return;
    }

    if (hasJoined) return;

    try {
      const res = await fetch(`/api/events/${event._id}/join`, {
        method: 'POST',
        credentials: 'include', // Required for HTTP-only cookie
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Failed to join event');
      }

      // Optimistically update UI
      setHasJoined(true);
      setLocalAttendeeCount(prev => prev + 1);

      Swal.fire({
        title: 'Successfully joined!',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (err) {
      Swal.fire({
        title: 'Error',
        text: err.message,
        icon: 'error',
      });
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-2">{event.title}</h2>
      <p className="text-sm text-gray-600 mb-1">
        By: {event.name} | {new Date(event.dateTime).toLocaleString()}
      </p>
      <p className="text-gray-700 mb-2">{event.description}</p>
      <p className="text-sm text-gray-600 mb-4">
        Location: {event.location}
      </p>
      <p className="text-sm font-semibold text-blue-700 mb-4">
        Attendees: {localAttendeeCount}
      </p>

      <button
        onClick={handleJoin}
        disabled={hasJoined}
        className={`w-full py-2 rounded-xl text-white transition ${
          hasJoined
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {hasJoined ? 'Joined' : 'Join Event'}
      </button>
    </div>
  );
};

export default FeaturedEventCard;

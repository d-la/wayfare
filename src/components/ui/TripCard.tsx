import type { Trip } from "@/data/dummyTrips"
import { getFlagEmoji } from "@/utils/flagEmoji"

type TripCardProps = {
    trip: Trip
};

export default function TripCard({ trip }: TripCardProps) {
    return (
        <div className="trip-card bg-surface-light rounded-3xl p-5 md:p-10 border border-solid border-app-border">
            <header className="flex flex-row justify-between items-center pb-5">
                <div className="trip-map rounded-3xl bg-surface text-copy-primary p-7">
                    {getFlagEmoji(trip.countryCode)}
                </div>
                <div className="trip-status">
                    {trip.status.toUpperCase()}
                </div>
            </header>
            <div className="trip-content w-full">
                <p className="text-copy-primary text-left pb-5">{trip.startDate} - {trip.endDate}</p>

                <div className="trip-legs flex flex-row flex-wrap pb-5 gap-3">
                    {trip.legs.map((leg, index) => (
                        <div key={index} className="pill py-1 px-2 bg-surface text-copy-primary rounded-3xl copy-sm">
                            {leg.city}
                        </div>
                    ))}
                </div>

                <hr className="bg-copy-primary mb-5"></hr>

                <div className="flex flex-row flex-nowrap justify-between items-center">
                    <div className="flex items-center gap-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 stroke-copy-primary">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.242 5.992h12m-12 6.003H20.24m-12 5.999h12M4.117 7.495v-3.75H2.99m1.125 3.75H2.99m1.125 0H5.24m-1.92 2.577a1.125 1.125 0 1 1 1.591 1.59l-1.83 1.83h2.16M2.99 15.745h1.125a1.125 1.125 0 0 1 0 2.25H3.74m0-.002h.375a1.125 1.125 0 0 1 0 2.25H2.99" />
                        </svg>

                        <span className="copy-sm text-copy-primary">
                            {trip.itineraryItems.length} Itinerary Items
                        </span>
                    </div>
                    <div className="trip-flights-booked flex flex-row gap-2.5 items-center">

                        {trip.flights.length > 1 ? (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 stroke-app-success">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <span className="copy-sm text-app-success">Flights Booked</span>
                            </>
                        ) : trip.flights.length == 1 ? (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 stroke-app-warning">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                                </svg>
                                <span className="copy-sm text-app-warning">1 Flight booked</span>
                            </>
                        ) : (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 stroke-app-error">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <span className="copy-sm text-app-error">No flights booked</span>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
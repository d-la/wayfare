import { upcomingTrips } from "@/data/dummyTrips";
import TripCard from "@/components/ui/TripCard";

export default function YourTripsPage() {
    return (
        <>
            <section className="header text-left container my-10 lg:my-20">
                <h1 className="text-copy-primary heading-sm md:heading-base">Your trips</h1>
                <p className="text-copy-primary copy-base">2 upcoming, 1 in planning</p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 container gap-5">
                {upcomingTrips.map(trip => (
                    <TripCard key={trip.id}  trip={trip} />
                ))}
            </div>
        </>
    )
}
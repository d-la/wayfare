export type TripStatus = 'planning' | 'upcoming' | 'active' | 'completed'

export interface Flight {
    flightNumber: string
    airline: string
    departure: {
        airport: string
        date: string
        time: string
    }
    arrival: {
        airport: string
        date: string
        time: string
    }
    confirmationCode: string | null
}

export interface Leg {
    city: string
    country: string
    countryCode: string
    arrivalDate: string | null
    departureDate: string | null
    accommodation: {
        name: string
        confirmationCode: string | null
        checkIn: string | null
        checkOut: string | null
    } | null
}

export interface ItineraryItem {
    id: number
    title: string
    category: 'food' | 'activity' | 'transport' | 'accommodation' | 'other'
    scheduledDate: string | null
    startTime: string | null
    durationMinutes: number | null
    address: string | null
    notes: string | null
}

export interface Trip {
    id: number
    status: TripStatus
    title: string
    countryCode: string
    startDate: string
    endDate: string | null
    flights: Flight[]
    legs: Leg[]
    itineraryItems: ItineraryItem[]
}

export const upcomingTrips: Trip[] = [
    {
        id: 177,
        status: 'upcoming',
        title: 'Japan',
        countryCode: 'JP',
        startDate: '2026-05-15',
        endDate: '2026-06-01',
        flights: [
            {
                flightNumber: 'JL567',
                airline: 'Japan Airlines',
                departure: { airport: 'JFK', date: '2026-05-15', time: '20:20' },
                arrival: { airport: 'NRT', date: '2026-05-16', time: '23:45' },
                confirmationCode: 'XKJP77'
            },
            {
                flightNumber: 'JL006',
                airline: 'Japan Airlines',
                departure: { airport: 'NRT', date: '2026-05-31', time: '11:00' },
                arrival: { airport: 'JFK', date: '2026-06-01', time: '10:35' },
                confirmationCode: 'XKJP77'
            }
        ],
        legs: [
            {
                city: 'Tokyo',
                country: 'Japan',
                countryCode: 'JP',
                arrivalDate: '2026-05-16',
                departureDate: '2026-05-21',
                accommodation: {
                    name: 'Shinjuku Granbell Hotel',
                    confirmationCode: 'HT9923',
                    checkIn: '2026-05-16',
                    checkOut: '2026-05-21'
                }
            },
            {
                city: 'Kyoto',
                country: 'Japan',
                countryCode: 'JP',
                arrivalDate: '2026-05-21',
                departureDate: '2026-05-25',
                accommodation: {
                    name: 'The Thousand Kyoto',
                    confirmationCode: null,
                    checkIn: '2026-05-21',
                    checkOut: '2026-05-25'
                }
            },
            {
                city: 'Osaka',
                country: 'Japan',
                countryCode: 'JP',
                arrivalDate: '2026-05-25',
                departureDate: '2026-05-29',
                accommodation: {
                    name: 'Cross Hotel Osaka',
                    confirmationCode: 'HT4421',
                    checkIn: '2026-05-25',
                    checkOut: '2026-05-29'
                }
            },
            {
                city: 'Hiroshima',
                country: 'Japan',
                countryCode: 'JP',
                arrivalDate: '2026-05-29',
                departureDate: '2026-05-31',
                accommodation: null
            }
        ],
        itineraryItems: [
            {
                id: 1,
                title: 'Tsukiji Outer Market',
                category: 'food',
                scheduledDate: '2026-05-17',
                startTime: '08:00',
                durationMinutes: 90,
                address: 'Tsukiji, Chuo City, Tokyo',
                notes: 'Go early for the best stalls'
            },
            {
                id: 2,
                title: 'teamLab Borderless',
                category: 'activity',
                scheduledDate: '2026-05-18',
                startTime: '10:00',
                durationMinutes: 180,
                address: 'Azabudai Hills, Minato City, Tokyo',
                notes: 'Book tickets in advance'
            },
            {
                id: 3,
                title: 'Senso-ji Temple',
                category: 'activity',
                scheduledDate: '2026-05-19',
                startTime: '07:30',
                durationMinutes: 120,
                address: '2 Chome-3-1 Asakusa, Taito City, Tokyo',
                notes: 'Arrive early to beat the crowds'
            },
            {
                id: 4,
                title: 'Arashiyama Bamboo Grove',
                category: 'activity',
                scheduledDate: '2026-05-22',
                startTime: '08:00',
                durationMinutes: 90,
                address: 'Sagaogurayama Tabuchiyamacho, Ukyo Ward, Kyoto',
                notes: null
            },
            {
                id: 5,
                title: 'Fushimi Inari Shrine',
                category: 'activity',
                scheduledDate: '2026-05-23',
                startTime: '09:00',
                durationMinutes: 150,
                address: '68 Fukakusa Yabunouchicho, Fushimi Ward, Kyoto',
                notes: 'Full hike is 2-3 hours'
            },
            {
                id: 6,
                title: 'Dotonbori food crawl',
                category: 'food',
                scheduledDate: '2026-05-26',
                startTime: '18:00',
                durationMinutes: 120,
                address: 'Dotonbori, Chuo Ward, Osaka',
                notes: 'Try takoyaki and okonomiyaki'
            }
        ]
    },
    {
        id: 178,
        status: 'upcoming',
        title: 'Italy',
        countryCode: 'IT',
        startDate: '2026-09-04',
        endDate: '2026-09-17',
        flights: [
            {
                flightNumber: 'AZ609',
                airline: 'ITA Airways',
                departure: { airport: 'JFK', date: '2026-09-04', time: '17:45' },
                arrival: { airport: 'FCO', date: '2026-09-05', time: '08:20' },
                confirmationCode: null
            }
        ],
        legs: [
            {
                city: 'Rome',
                country: 'Italy',
                countryCode: 'IT',
                arrivalDate: '2026-09-05',
                departureDate: '2026-09-10',
                accommodation: {
                    name: 'Hotel Indigo Rome',
                    confirmationCode: null,
                    checkIn: '2026-09-05',
                    checkOut: '2026-09-10'
                }
            },
            {
                city: 'Florence',
                country: 'Italy',
                countryCode: 'IT',
                arrivalDate: '2026-09-10',
                departureDate: '2026-09-14',
                accommodation: null
            },
            {
                city: 'Cinque Terre',
                country: 'Italy',
                countryCode: 'IT',
                arrivalDate: '2026-09-14',
                departureDate: '2026-09-17',
                accommodation: null
            }
        ],
        itineraryItems: [
            {
                id: 7,
                title: 'Colosseum & Roman Forum',
                category: 'activity',
                scheduledDate: '2026-09-06',
                startTime: '09:00',
                durationMinutes: 180,
                address: 'Piazza del Colosseo, 1, Rome',
                notes: 'Pre-book timed entry tickets'
            },
            {
                id: 8,
                title: 'Vatican Museums',
                category: 'activity',
                scheduledDate: '2026-09-08',
                startTime: '08:00',
                durationMinutes: 240,
                address: 'Viale Vaticano, Vatican City',
                notes: null
            }
        ]
    },
    {
        id: 179,
        status: 'planning',
        title: 'Portugal',
        countryCode: 'PT',
        startDate: '2027-03-01',
        endDate: null,
        flights: [],
        legs: [
            {
                city: 'Lisbon',
                country: 'Portugal',
                countryCode: 'PT',
                arrivalDate: null,
                departureDate: null,
                accommodation: null
            },
            {
                city: 'Porto',
                country: 'Portugal',
                countryCode: 'PT',
                arrivalDate: null,
                departureDate: null,
                accommodation: null
            }
        ],
        itineraryItems: []
    }
]

export const pastTrips: Trip[] = [
    {
        id: 101,
        status: 'completed',
        title: 'Thailand',
        countryCode: 'TH',
        startDate: '2024-11-03',
        endDate: '2024-11-17',
        flights: [
            {
                flightNumber: 'TG791',
                airline: 'Thai Airways',
                departure: { airport: 'JFK', date: '2024-11-03', time: '00:55' },
                arrival: { airport: 'BKK', date: '2024-11-04', time: '05:30' },
                confirmationCode: 'TH8821'
            }
        ],
        legs: [
            {
                city: 'Bangkok',
                country: 'Thailand',
                countryCode: 'TH',
                arrivalDate: '2024-11-04',
                departureDate: '2024-11-08',
                accommodation: {
                    name: 'Mandarin Oriental Bangkok',
                    confirmationCode: 'MO2241',
                    checkIn: '2024-11-04',
                    checkOut: '2024-11-08'
                }
            },
            {
                city: 'Chiang Mai',
                country: 'Thailand',
                countryCode: 'TH',
                arrivalDate: '2024-11-08',
                departureDate: '2024-11-12',
                accommodation: {
                    name: 'Anantara Chiang Mai Resort',
                    confirmationCode: 'AN7712',
                    checkIn: '2024-11-08',
                    checkOut: '2024-11-12'
                }
            },
            {
                city: 'Koh Samui',
                country: 'Thailand',
                countryCode: 'TH',
                arrivalDate: '2024-11-12',
                departureDate: '2024-11-17',
                accommodation: {
                    name: 'Four Seasons Koh Samui',
                    confirmationCode: 'FS5590',
                    checkIn: '2024-11-12',
                    checkOut: '2024-11-17'
                }
            }
        ],
        itineraryItems: []
    },
    {
        id: 102,
        status: 'completed',
        title: 'Mexico',
        countryCode: 'MX',
        startDate: '2024-02-10',
        endDate: '2024-02-18',
        flights: [],
        legs: [
            {
                city: 'Mexico City',
                country: 'Mexico',
                countryCode: 'MX',
                arrivalDate: '2024-02-10',
                departureDate: '2024-02-14',
                accommodation: {
                    name: 'Hotel Carlota',
                    confirmationCode: 'HC3310',
                    checkIn: '2024-02-10',
                    checkOut: '2024-02-14'
                }
            },
            {
                city: 'Oaxaca',
                country: 'Mexico',
                countryCode: 'MX',
                arrivalDate: '2024-02-14',
                departureDate: '2024-02-18',
                accommodation: {
                    name: 'Quinta Real Oaxaca',
                    confirmationCode: 'QR8842',
                    checkIn: '2024-02-14',
                    checkOut: '2024-02-18'
                }
            }
        ],
        itineraryItems: []
    }
]
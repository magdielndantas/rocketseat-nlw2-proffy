export default function converHourToMinutes(time: string) {
    // hh:mm
    const [hour, minutes] = time.split(':').map(Number)

    const timeInMinutes = (hour * 60) + minutes

    return timeInMinutes
}
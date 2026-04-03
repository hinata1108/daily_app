export const getJSTDate = () => {
    const today = new Date();
    const JSTDate = new Date(today.getTime()+9*60*60*1000);
    const date = JSTDate.toISOString().split('T')[0];
    return date;
}

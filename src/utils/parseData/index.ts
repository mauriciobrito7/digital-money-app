export const parseActivities = (activities: any) => {
  return activities.map((activity: any) => {
    const { name, amount, date, activity_id } = activity;
    return {
      name,
      amount,
      date,
      id: activity_id,
    };
  });
};

export const parseRecordContent = (record: any, variant: any) => {
  return {
    content: { ...record },
    variant,
  };
};
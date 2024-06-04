function Weekday(number) {
    const weekdays = ["ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი", "კვირა"];
    document.getElementById('weekday').value = weekdays[number - 1];
}
const mockData = [
  { platform: 'telegram', fullName: 'Іванов Іван Іванович', iban: 'UA85 3996 2200 0000 0260 0123 3566', ibanProblem: 404, taxId: '2248000331', phone: '380 652 123456', submittedDate: '09.10.2026' },
  { platform: 'telegram', fullName: 'Петренко Олександр Сергійович', iban: 'UA12 3052 9900 0002 6001 7845 1123', ibanProblem: 417, taxId: '3186409275', phone: '380 671 482913', submittedDate: '10.10.2026' },
  { platform: 'telegram', fullName: 'Ковальчук Марія Андріївна', iban: 'UA47 3223 1300 0002 6004 9217 6385', ibanProblem: 422, taxId: '2947318064', phone: '380 931 675204', submittedDate: '11.10.2026' },
  { platform: 'telegram', fullName: 'Бондаренко Дмитро Олегович', iban: 'UA63 3003 4600 0002 6008 3154 7092', ibanProblem: 409, taxId: '3672051849', phone: '380 501 938627', submittedDate: '12.10.2026' },
  { platform: 'telegram', fullName: 'Шевченко Анна Вікторівна', iban: 'UA28 3510 0500 0002 6007 4812 9364', ibanProblem: 431, taxId: '2518964370', phone: '380 681 204759', submittedDate: '13.10.2026' },
  { platform: 'telegram', fullName: 'Мельник Максим Ігорович', iban: 'UA91 3348 5100 0002 6003 6729 1458', ibanProblem: 415, taxId: '3094726158', phone: '380 731 596842', submittedDate: '14.10.2026' },
  { platform: 'telegram', fullName: 'Ткаченко Софія Романівна', iban: 'UA36 3209 8400 0002 6005 9183 4276', ibanProblem: 428, taxId: '2783159462', phone: '380 951 327684', submittedDate: '15.10.2026' },
  { platform: 'telegram', fullName: 'Кравченко Артем Миколайович', iban: 'UA54 3138 4900 0002 6009 2641 7530', ibanProblem: 412, taxId: '3457082196', phone: '380 631 849275', submittedDate: '16.10.2026' },
  { platform: 'telegram', fullName: 'Олійник Катерина Павлівна', iban: 'UA75 3071 2300 0002 6006 8354 1927', ibanProblem: 425, taxId: '2639417850', phone: '380 991 462538', submittedDate: '17.10.2026' },
  { platform: 'telegram', fullName: 'Поліщук Владислав Юрійович', iban: 'UA19 3253 6500 0002 6004 1578 3692', ibanProblem: 419, taxId: '3862145073', phone: '380 661 705391', submittedDate: '18.10.2026' },
  { platform: 'telegram', fullName: 'Лисенко Дарина Олексіївна', iban: 'UA82 3395 0000 0002 6008 7413 5269', ibanProblem: 433, taxId: '2405783169', phone: '380 971 283746', submittedDate: '19.10.2026' },
  { platform: 'telegram', fullName: 'Мороз Андрій Васильович', iban: 'UA43 3282 0900 0002 6001 9367 4825', ibanProblem: 406, taxId: '3728614057', phone: '380 731 924618', submittedDate: '20.10.2026' },
  { platform: 'telegram', fullName: 'Романенко Юлія Денисівна', iban: 'UA67 3046 6500 0002 6007 2194 8531', ibanProblem: 421, taxId: '2864391752', phone: '380 501 376925', submittedDate: '21.10.2026' },
  { platform: 'telegram', fullName: 'Савченко Богдан Петрович', iban: 'UA31 3534 8900 0002 6005 6481 2073', ibanProblem: 414, taxId: '3549276810', phone: '380 681 592437', submittedDate: '22.10.2026' },
  { platform: 'telegram', fullName: 'Марченко Ірина Сергіївна', iban: 'UA96 3264 6100 0002 6009 3725 8146', ibanProblem: 430, taxId: '2715083649', phone: '380 931 846251', submittedDate: '23.10.2026' },
  { platform: 'telegram', fullName: 'Гриценко Назар Володимирович', iban: 'UA58 3808 0500 0002 6003 4957 1268', ibanProblem: 408, taxId: '3981752046', phone: '380 951 614783', submittedDate: '24.10.2026' },
  { platform: 'telegram', fullName: 'Данилюк Олена Михайлівна', iban: 'UA24 3365 0300 0002 6006 8139 5742', ibanProblem: 426, taxId: '2573649180', phone: '380 631 257904', submittedDate: '25.10.2026' },
]

export default mockData

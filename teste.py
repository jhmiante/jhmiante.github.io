from datetime import datetime
from pydark.date.dtget import getUtilDay
                                        
dia = datetime.now()
dia_util = getUtilDay(dia, 5)

print(dia_util)

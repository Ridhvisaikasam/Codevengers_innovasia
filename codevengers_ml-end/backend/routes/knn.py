import csv,math,operator,sys
A=[]

with open('./routes/Crop_recommendation.csv',newline='') as csvfile:
  next(csvfile)
  for row in csv.reader(csvfile):
    A.append(row)

euclidean = []
#arr = [float(i) for i in input().split()]
#arr = [101,10,47,25.5421695,83.31883376,6.936997681,57.57343233] 
arr = [sys.argv[1],sys.argv[1],sys.argv[1],sys.argv[1],sys.argv[1],sys.argv[1],sys.argv[1]]
x1 = arr[0]
x2 = arr[1]
x3 = arr[2]
x4 = arr[3] 
x5 = arr[4] 
x6 = arr[5]
x7 = arr[6]

for row in A:
  xcod = ((float(x1)-float(row[0]))**2 + (float(x2)-float(row[1]))**2+(float(x3)-float(row[2]))**2+(float(x4)-float(row[3]))**2+
          (float(x5)-float(row[4]))**2+
          (float(x6)-float(row[5]))**2+
          (float(x7)-float(row[6]))**2
          )**0.5
  euclidean.append(xcod)
dic1 = {}
for  i in range(0,len(A)):
  row = A[i]
  dic1[euclidean[i]] = row[7]
result_arr = []
i = 0
k = 3
for k in sorted(dic1):
  if(i == 100):
    break
  else:
    result_arr.append(dic1[k])
    i = i+1
dic1 = {}

for row in result_arr:
  if row not in dic1:
    dic1[row] = 1
  else:
    dic1[row] += 1



  
#sorted_d = dict(sorted(dic1.items(), key=operator.itemgetter(1),reverse=True))

max = 0
clas = 0
for x,y in sorted(dic1.items()):
  
  if(y>=max):
    max = y

    clas = x
print('The Classification Label : ')
print(clas)
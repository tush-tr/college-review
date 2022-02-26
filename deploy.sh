gcloud container clusters create crk --zone=us-west1-a
sleep 2
kubectl apply -f pod.yaml
<<<<<<< HEAD
sleep 8
kubectl get services
=======
kubectl expose pods college-review-pod1 --port=80 --type=LoadBalancer
kubectl get services
>>>>>>> 863125fc7a76201b2137432480a011e81b9fcea0

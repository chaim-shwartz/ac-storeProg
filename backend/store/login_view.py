from django.http import JsonResponse

def login(request):
    print('hi')
    return JsonResponse({'chaim':"ari"})
import redis

redis = redis.Redis('localhost', 6379, db=0)
if redis.bgsave():
    redis.flushdb()
    print "database saved and flushed"
else:
    print "unable to save db"